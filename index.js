
const submitButton = $('#submit-button')
const marcInput = $('#marc-input')
const selectedDelimiter = $('#selected-delimiter')

let newMarc = ""


submitButton.on("click", function (event) {
    event.preventDefault();
    console.log(marcInput.val())


    $('.new-marc').html("")
    delimiterChange()
   
})

const delimiterChange = () => {
    if (/\$|ǂ|‡/.test(marcInput.val())) {
        console.log("delimiters present")
        //replace current delimiter with newDelimiter
    } 

    const oldMarc = marcInput.val()
    const newMarcEdit = oldMarc.replaceAll(/\$|ǂ|‡|\|/g, "$").trim()
    const newOclc = oldMarc.replaceAll(/\$|ǂ|‡|\|/g, "ǂ").trim()
    const newAlma = oldMarc.replaceAll(/\$|ǂ|‡|\|/g, "‡").trim()
    const newNoDelimiter = oldMarc.replaceAll(/\$.|ǂ.|‡.|\|./g, "").replaceAll(/  /g, " ").trim()
    const newEmdash = oldMarc.replaceAll(/\$. |ǂ. |‡. |\|. /g, "—").replaceAll(/ —/g, "—").replace(/^—/, "").trim()
    const newPipe = oldMarc.replaceAll(/\$|ǂ|‡|\|/g, "|").trim()
    

    console.log(newMarcEdit)
    console.log(newOclc)
    console.log(newAlma)
    console.log(newNoDelimiter)
    console.log(newEmdash)

    $('#new-marcedit').append(newMarcEdit)
    $('#new-alma').append(newAlma)
    $('#new-oclc').append(newOclc)
    $('#new-no').append(newNoDelimiter)
    $('#new-emdash').append(newEmdash)
    $('#new-pipe').append(newPipe)

}

//‡a New York, ‡b Crowell ‡c [1955]

