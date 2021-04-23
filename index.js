
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
    const newMarcEdit = oldMarc.replaceAll(/\$|ǂ|‡/g, "$").trim()
    const newOclcEdit = oldMarc.replaceAll(/\$|ǂ|‡/g, "ǂ").trim()
    const newAlmaEdit = oldMarc.replaceAll(/\$|ǂ|‡/g, "‡").trim()
    const newNoDelimiterEdit = oldMarc.replaceAll(/\$.|ǂ.|‡./g, "").replaceAll(/  /g, " ").trim()
    const newEmdashEdit = oldMarc.replaceAll(/\$. |ǂ. |‡. /g, "—").replaceAll(/ —/g, "—").replace(/^—/, "").trim()




    console.log(newMarcEdit)
    console.log(newOclcEdit)
    console.log(newAlmaEdit)
    console.log(newNoDelimiterEdit)
    console.log(newEmdashEdit)

    $('#new-marcedit').append(newMarcEdit)
    $('#new-alma').append(newAlmaEdit)
    $('#new-oclc').append(newOclcEdit)
    $('#new-no').append(newNoDelimiterEdit)
    $('#new-emdash').append(newEmdashEdit)


}

//‡a New York, ‡b Crowell ‡c [1955]

