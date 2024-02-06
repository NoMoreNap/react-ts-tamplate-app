class WBApi {
    constructor (URL) {
        this.url = URL
        this.id = 90057078
        this.testId = 158054103
        this.itemsPerPage = 100
        this.findedPosotoins = []
    }

    async search (params) {
        const searchString = (new URLSearchParams(params)).toString()
        const URL = this.url + `search?${searchString}`
        const data = await fetch(URL).then(r => r.json())
        return data
    }

    findeNeedlePosition(data, search) {
        
        data.forEach((el,i) => {
            if (el.id === this.id) {
                this.findedPosotoins.push({position: i+1, page: ((i+1) / 100 >> 0) + 1, search
                //data: {...data[i]}
            })
            }
        })

    }

    get finded() {
        return this.findedPosotoins
    }
}

const parse = async () => {
    const searchs = ['костюм спортивный','костюм спортивный для девочки','костюм спортивный для мальчика', 'костюм детский','костюм детский теплый','костюм детский с начесом']
    const URL = 'https://search.wb.ru/exactmatch/ru/common/v4/'
    const WBApiEngine = new WBApi(URL)
    for (const search of searchs) {
        let maxPages = 10;
        let page = 0
        let findedData = [];
        while(page < maxPages) {
            const body = {
                appType: 1, // не меняется
                curr: 'rub', // не меняется
                dest: -1257786, // можно менять, если будет потребность
                query: search, // поисковая строка, содержится в XLS файле
                resultset: 'catalog', // не меняется
                sort: 'popular', // сортировка, тоже не меняется
                spp: 30, // хз что делает, на результаты поиска не влияет
                suppressSpellcheck: false,// хз что делает, на результаты поиска не влияет
                page: page + 1 // страница, можно не прокидывать если страница первая
            }
    
            const data  = await WBApiEngine.search(body)
            findedData = [...findedData,...data.data.products]
            page++;
    
            console.log(page)
        }
        WBApiEngine.findeNeedlePosition(findedData, search)
        
    }

    console.log(WBApiEngine.finded)

}


parse()