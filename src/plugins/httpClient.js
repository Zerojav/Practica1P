const httpClient = {
    get: async (url) => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },
    post: (url,body)=>{},
    put:(url,body)=>{},
    delete:(url,body)=>{},
}

module.exports = {httpClient}