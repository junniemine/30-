const quotes=[
    "네 자신을 믿어라. 너 자신이 큰 기적이다. -브레이크",
    "삶이 있는 한 희망은 있다. -키케로",
    "당신의 미래는 당신이 만든다. -파블로 피카소",
    "신은 용기있는자를 결코 버리지 않는다 -켄러",
    "피할수 없으면 즐겨라 -로버트 엘리엇"
]

newQuote.onclick=()=>{
    const n=Math.floor(Math.random()*quotes.length)
    const randomQuote= quotes[n]

    container.innerText = randomQuote
}