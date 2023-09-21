class FieldPassword {
    static toggle = (target) => {
        target.toggleAttribute('show')

        const input = target.previousElementSibling

        const type = input.getAttribute('type')

        if (type === 'password') {
            input.setAtribute('type', 'text')
        } else {
            input.setAtribute('type', 'password')
        }
    }
}

window.fieldPassword = FieldPassword
