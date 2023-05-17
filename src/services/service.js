
class MarvelService{
    _apiBase='https://gateway.marvel.com:443/v1/public/';
    _apiKey='apikey=ee08e659fe8dbd136caf78ed92338ca2'    
    _baseOffset='291';
        getResource = async (url) => {
            let res = await fetch(url);
        
            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }
        
            return await res.json();
        }

        getAllCharacters=async (offset=this._baseOffset)=>{
            const res=await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
            return res.data.results.map(this._transformCharacter);
        }
        // getCharacter=(id)=>{
        //     return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        // }
        getCharacter= async (id)=>{
            const res=await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
            return this._transformCharacter(res.data.results[0]);
        }

        getCharacterApi=()=>{
            return this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=291&apikey=ee08e659fe8dbd136caf78ed92338ca2')
        }

        _transformCharacter=(character)=>{
            
            if(character.description===''){
                character.description='This person has no description';
            }
            if(character.description.length>200){
                character.description=character.description.slice(0,220)+'...';
            }
            return {
                id: character.id,
                name:character.name,
                description: character.description,
                thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
                homepage: character.urls[0].url,
                wiki: character.urls[1].url,
                comics: character.comics.items           
            }    
        }

}
// export {postData};
// export {getResource}

export default MarvelService;