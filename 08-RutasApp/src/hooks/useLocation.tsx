import { useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';
import MapView from 'react-native-maps';


export const useLocation = () => {


    const [hasLocation, setHasLocation] = useState(false)

    // guardar posiciones del usuario
    const [routeLines, setrouteLines] = useState<Location[]>([])

    const [initialPosition, setinitialPosition] = useState<Location>({
        longitude: 0,
        latitude: 0
    })

    const [userLocation, setUserLocation]= useState<Location>({
        longitude:0,
        latitude: 0
    })

    const watchId = useRef<number>()
    const isMounted = useRef(true)

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    }, [])

    // info -> {{coords}}
    useEffect(() => {
        
        getCurrentLocation().then(location => {
            if(!isMounted) return;

            setinitialPosition(location);
            setUserLocation(location);
            setrouteLines(routes => [...routes,location])
            setHasLocation(true);
           
        });
            // Geolocation.getCurrentPosition(
            //     ({ coords }) => {
            //         setinitialPosition({
            //             latitude: coords.latitude,
            //             longitud: coords.longitude
            //         })

            //         setHasLocation(true);
            //     },
            //     (err) => console.log({ err }),
            //     {
            //         enableHighAccuracy: true
            //     }
        //)
}, []);

const getCurrentLocation = ():Promise<Location> => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                })

            },
            (err) => reject({err}), 
             {
                enableHighAccuracy: true
            }
        );
    });
}

// distanceFilter notifica cada vez que afanza 10 metros, consume la bateria
const followUserLocation = () => {
    watchId.current = Geolocation.watchPosition(
        ({ coords }) => {

            
            if(!isMounted.current) return;
            
            const location: Location = {
                latitude: coords.latitude,
                longitude: coords.longitude
            }

            console.log({coords})
            setUserLocation({
                latitude: coords.latitude,
                longitude: coords.longitude
            })
            setrouteLines(routes => [...routes,location])
        },
        (err) => console.log(err), 
         {
            enableHighAccuracy: true, distanceFilter: 10
        }
    )
}

const stopFollowUserLocation = () => {
    if(watchId.current)
        Geolocation.clearWatch(watchId.current)
}

return {
    hasLocation,
    initialPosition,
    userLocation,
    followUserLocation,
    getCurrentLocation,
    stopFollowUserLocation,
    routeLines
}
        
    
}
