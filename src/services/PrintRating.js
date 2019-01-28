export const printResult = (number) => {
      
    const solid = '<span class="fa fa-star"></span>';
    const empty = '<span class="fa fa-star-o"></span>';
    const half = '<span class="fa fa-star-half-o"></span>';
    let result = '';
    
    switch(true) {
        case (Number(number) === 5):
        result += solid;
        result += solid;
        result += solid;
        result += solid;
        result += solid;
        break;
        case (Number(number) >= 4.5):
        result += solid;
        result += solid;
        result += solid;
        result += solid;
        result += half;
        break;
        case (Number(number) >= 4):
        result += solid;
        result += solid;
        result += solid;
        result += solid;
        result += empty;
        break;
        case (Number(number) >= 3.5):
        result += solid;
        result += solid;
        result += solid;
        result += half;
        result += empty;
        break;
        case (Number(number) >= 3):
        result += solid;
        result += solid;
        result += solid;
        result += empty;
        result += empty;
        break;
        case (Number(number) >= 2.5):
        result += solid;
        result += solid;
        result += half;
        result += empty;
        result += empty;
        break;
        case (Number(number) >= 2):
        result += solid;
        result += solid;
        result += empty;
        result += empty;
        result += empty;
        break;
        case (Number(number) >= 1.5):
        result += solid;
        result += half;
        result += empty;
        result += empty;
        result += empty;
        break;
        case (Number(number) >= 1):
        result += solid;
        result += empty;
        result += empty;
        result += empty;
        result += empty;
        break;
        case (Number(number) >= .5):
        result += half;
        result += empty;
        result += empty;
        result += empty;
        result += empty;
        break;
        case (Number(number) >= 0):
        result += empty;
        result += empty;
        result += empty;
        result += empty;
        result += empty;
        break;
        default:
        return result;
    }
    return result;
}