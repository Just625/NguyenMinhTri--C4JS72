window.onload = () =>{
    const uploadFileForm = document.getElementById("upload-file")
    uploadFileForm.addEventListener('submit', (e) =>{
        e.preventDefault()
        const files = uploadFileForm.file.files
        if (files.length === 0) {
            alert('Please chose a file!')
        } else{
            uploadFile(files[0])
        }
    })
}

uploadFile = (file) =>{
    const fileName = file.fileName
    const filePath = `files/${fileName}`
    const fileRef = firebase.storage().ref().child(filePath)
    fileRef.put(file).then(res =>{
        console.log(getFileUrl(fileRef))
    })
}
function getFileUrl(fileRef) {
    return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`
  }