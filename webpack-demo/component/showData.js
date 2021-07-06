 

        async function getData(url) {
            let res = await fetch(url)
            let data = await res.json()
            console.log(data)
            return data;
        }

        let Container = document.getElementById('data');

        function append(d,Container) {
            d.forEach(({ title, image }) => {
                let div = document.createElement('div')
                let p = document.createElement('p')

                p.innerHTML = title
                let img = document.createElement('img')
                img.src = image;
                div.append(img, p)
                Container.append(div)
            });
        }
        export {getData,append} 