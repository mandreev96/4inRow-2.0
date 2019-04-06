import dictionary from '../dictionary.json'

export function textDecorator(phrase, state = false) {
    return (state) ?
        dictionary[phrase]['ru'] :
        dictionary[phrase]['en'];
}
