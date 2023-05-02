
class MarvelService{
    _apiBase='https://gateway.marvel.com:443/v1/public/';
    _apiKey='apikey=ee08e659fe8dbd136caf78ed92338ca2'    
        getResource = async (url) => {
            let res = await fetch(url);
        
            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }
        
            return await res.json();
        }

        getAllCharacters=async ()=>{
            const res=await this.getResource(`${this._apiBase}characters?limit=9&offset=123&${this._apiKey}`);
            return res.data.results.map(this._transformCharacter(res));
        }
        // getCharacter=(id)=>{
        //     return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        // }
        getCharacter= async (id)=>{
            const res=await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
            return this._transformCharacter(res);
        }

        getCharacterApi=()=>{
            return this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=5&offset=8&apikey=ee08e659fe8dbd136caf78ed92338ca2')
        }

        _transformCharacter=(res)=>{
            
            if(res.data.results[0].description===''){
                res.data.results[0].description='This person has no description';
            }
            if(res.data.results[0].description.length>200){
                res.data.results[0].description=res.data.results[0].description.slice(0,220)+'...';
            }
            return {
                id: res.id,
                name: res.data.results[0].name,
                description: res.data.results[0].description,
                thumbnail: res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
                homepage: res.data.results[0].urls[0].url,
                wiki: res.data.results[0].urls[1].url            
            }    
        }

}
// export {postData};
// export {getResource}

export default MarvelService;