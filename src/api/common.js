


export async function getBreedApi() {
    let razas_ue = [];
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await res.json()

    Object.entries(data.message).forEach(([key, value]) => {
      razas_ue.push({'id':key,'raza':key.charAt(0).toUpperCase() + key.slice(1) ,'sub_raza':value})
    });
    return razas_ue

}

export async function findeDogsApi(stateFilter) {

  let ret = []
  for(var i=0; i<stateFilter.length; i++){
    const res = await fetch('https://dog.ceo/api/breed/'+stateFilter[i]+'/images')
    const data = await res.json()
    ret.push({raza:stateFilter[i], data:data.message})
  }
  return ret
}