export const required = value => {
    if(!!value)
        return undefined
    
    return 'Поле обязательно для заполнения'
}

export const maxLengthCreator = (length) => (value) => {
    if(value?.length > length)
        return `Максимальная длина не более ${length} символов`

    return undefined
} 