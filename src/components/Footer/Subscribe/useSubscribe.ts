// import { useMutation } from '@apollo/client';
import { FormEvent } from 'react';

// import { SUBSCRIBE_TO_NEWSLETTER } from "./Subscribe.gql";
import { useCallback, useState } from 'react';

export const useSubscribe = () => {

    const [subscribeError, setSubscribeError] = useState([]);
    const [subscribeSuccess, setSubscribeSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const clearMessage = () => {
        setSubscribeError([]);
        setSubscribeSuccess(false);
    };

    // const [ subscribeNewsLetter ] = useMutation(SUBSCRIBE_TO_NEWSLETTER, {
    //     fetchPolicy: 'no-cache',
    //     onError: (e: any) => {
    //         setSubscribeError(e?.graphQLErrors || []);
    //     },
    //     onCompleted: () => {
    //         setSubscribeSuccess(true);
    //     }
    // });

    const handleSubmit = useCallback(

        async (event: FormEvent<HTMLFormElement>) => {
            try {
                event.preventDefault();
                setLoading(true);
                clearMessage();

                const formData = new FormData(event.currentTarget);
                                
                // await subscribeNewsLetter({
                //     variables: Object.fromEntries(formData)
                // });

            } catch (error) {
                if (process.env.NODE_ENV !== 'production') {
                    console.error(error);
                }
            } finally {
                setLoading(false);
            }
        },
        []
    );
    return {
        handleSubmit,
        subscribeError,
        subscribeSuccess,
        loading
    };
};
