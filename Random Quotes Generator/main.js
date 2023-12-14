

function generate(){
  let quotes={
    "Dolly Parton":'“Find out who you are and do it on purpose.” ',
    "Michelle Obama":'“For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.” ',
    "Franklin D. Roosevelt":'“The only thing we have to fear is fear itself.”',
    "Steve Jobs":'“The most important thing is to enjoy your life—to be happy—it’s all that matters.” '
  }

  let authors=Object.keys(quotes)
  let author=authors[Math.floor(Math.random()* 
    authors.length)]

 let quote=quotes[author]
 document.getElementById("quote").innerHTML=quote
 document.getElementById("author").innerHTML=author

}



