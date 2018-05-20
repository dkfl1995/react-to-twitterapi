const apiUrl = 'http://localhost:3000';

export function receiveTimeline(json){
    type: 'RECEIVE_TIMELINE',
    json
}

export function fetchFailed(bool){
    type: 'FETCH_FAILED'
}

export function fetchSuccess(bool){
    type: 'FETCH_SUCCESS'
}

export function fetchTimeline(screenName){
    return dispatch => {
        return fetch(apiUrl + '/user-timeline', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'user': screenName
            })
        })
        .then(response => {
            let res;
            if(!response){
                
            }else {
                dispatch(fetchSuccess(true))
                res = response.json();
            }
            return res;
        })
        .then(
            (json) => (
                dispatch(receiveTimeline(json))
            )
        )
        .catch(
            err => {
                console.log(err); 
                dispatch(fetchFailed(true));
            }
        );
    };
}