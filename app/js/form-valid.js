AOS.init({
    offset: 200,
    duaration: 400
});

const REG_EMAIL = /^([a-zA-Z\d]+){6,}(\.){0,1}([a-zA-Z\d]+)(\+\d+)?@[a-z\d\.\-]{1,65}\.[a-z]{1,5}/
const REG_NAME = /^[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+((\s[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+)?)+$/
const isRequired = value => value.trim() !== '' ? '' : 'That field is required'
const isEmail = value => REG_EMAIL.test(value) ? '' : 'Email not validate'
const isName = value => REG_NAME.test(value) ? '' : 'Name not validate'
//hàm gửi msg khi lỗi
const createMsg = (parentNode, controlNodes, msg)=>{
    const invalidDiv = document.createElement('div')
    invalidDiv.className = 'invalid-feedback'
    invalidDiv.innerHTML = msg
    parentNode.appendChild(invalidDiv)
    controlNodes.forEach(item=>{
        item.classList.add('is-invalid')
    })
}

//check input error thì createMsg
const isValid = (param)=>{
    const {value, funcs, parentNode, controlNodes}=param
    for (const func of funcs) {
        const msg = func(value)
        if(msg){
            createMsg(parentNode, controlNodes, msg)
            return msg
        }
    }
    return ''
}
//reset form về ban đầu, xóa các msg cho lần tiếp theo
const clearMsg = ()=>{
    document.querySelectorAll('.is-invalid').forEach(item =>{
        item.classList.remove('is-invalid')
    })
    document.querySelectorAll('.invalid-feedback').forEach(item=>{
        item.remove()
    })
}

document.querySelector('form').addEventListener('submit', event =>{
    event.preventDefault()
    clearMsg()
    const emailNode = document.querySelector('#email')
    const nameNode = document.querySelector('#name')

    const errorForm = [
        isValid({
            value: emailNode.value,
            funcs: [isRequired, isEmail],
            parentNode: emailNode.parentElement,
            controlNodes: [emailNode]
        }),
        isValid({
            value: nameNode.value,
            funcs: [isRequired, isName],
            parentNode: nameNode.parentElement,
            controlNodes: [nameNode]
        })
    ]
    let isValidForm = false
    isValidForm = errorForm.every(item=> !item)
    if(isValidForm){
        clearMsg();
    }
})





