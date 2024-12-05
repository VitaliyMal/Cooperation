//#region AreaCalculating

// Площадь окружности(квадрат радиуса на Пи)
function CircleArea ( radius )  { return Math.PI * (radius ^2); }
// Площадь квадрата(длина на высоту)
function SquareArea ( length )  { return length * length;}
// Площадь трапеции(сумма основания левого треугольника и его стороны умноженная на высоту, делёную на 2)
function TrapezoidArea ( side1, side2, side4)  { return (  (side1 + (side4 - side2)) *
                                                           (Math.sqrt(side1 ^ 2 + (side4 - side2) ^ 2))  )
                                                            / 2; }
// Площадь паралеллограмма( Сторона умноженная на синус угла и на основание)
//Для углов нужно преобразовать градусы в радианы, когда вы используете функцию Math.sin, поэтому умножение на (Math.PI / 180) необходимо.
function ParallelogramArea (side1, side4, angle1)  { return (side1 * side4 * Math.sin(angle1)*(Math.PI / 180)); }

// Площадь треугольника(Формула Герона)
function TriangleArea (side1, side2, side3)
{

    let semiPerimeter = ((side1 + side2 + side3) / 2)

    return Math.sqrt( semiPerimeter *
           (semiPerimeter - side1) *
           (semiPerimeter - side2) *
           (semiPerimeter - side3) );
        }
//#endregion


let choose;
// Выбор элемента списка
function ChooseListElement(value){
        document.getElementById('circleForm').style.display = 'none';
        document.getElementById('squareForm').style.display = 'none';
        document.getElementById('triangleForm').style.display = 'none';
        document.getElementById('trapezoidForm').style.display = 'none';
        document.getElementById('parallelogramForm').style.display = 'none';
        document.getElementById('ButtonContainer').style.display = 'none';
    choose = value;
    switch(value){
        case "circle":
            document.getElementById('circleForm').style.display = 'flex';
            document.getElementById('ButtonContainer').style.display = 'flex';
            
            console.log("User choose circle");
            break;
        case "square":
            document.getElementById('squareForm').style.display = 'flex';
            document.getElementById('ButtonContainer').style.display = 'flex';

            console.log("User choose square");
            break;
        case "triangle":
            document.getElementById('triangleForm').style.display = 'flex';
            document.getElementById('ButtonContainer').style.display = 'flex';

            console.log("User choose triangle");
            break;
        case "parallelogram":
            document.getElementById('parallelogramForm').style.display = 'flex';
            document.getElementById('ButtonContainer').style.display = 'flex';

            console.log("User choose paralellogramm");
            break;
        case "trapezoid":
            document.getElementById('trapezoidForm').style.display = 'flex';
            document.getElementById('ButtonContainer').style.display = 'flex';

            console.log("User choose trapezoid");
            break;
            
    }
}
//В вашем коде возникла проблема с вычислением площади параллелограмма, а именно, вы получаете NaN (Not a Number) из-за неправильного обращения к элементам input. В JavaScript document.getElementById принимает только один аргумент, а у вас стоит несколько аргументов, что и вызывает ошибку.
//Кроме того, проблема может также заключаться в том, что значения, получаемые из input, приходят как строки, и для математических операций их необходимо преобразовать в числа.
    function ButtonClick(){
    switch (choose){
        case "circle":
            alert(CircleArea(document.getElementById("Circle's radius").value));
            break;
        case "square":
            alert(SquareArea(document.getElementById("Square length of sides").value));
            break;
        case "triangle":
            // Преобразование значений в числа
            const triangleSide1 = parseFloat(document.getElementById('triangle side1').value);
            const triangleSide2 = parseFloat(document.getElementById('triangle side2').value);
            const triangleSide3 = parseFloat(document.getElementById('triangle side3').value);
            alert(TriangleArea(triangleSide1, triangleSide2, triangleSide3));
		// работать не будет т.к. надо привязать вводимые углы
            break;
        
        case "parallelogram":
            // Преобразование значений в числа
            const parallelogramSide1 = parseFloat(document.getElementById('Paralellogramm first side length').value);
            const parallelogramSide2 = parseFloat(document.getElementById('Paralellogramm second side length').value);
            const angle1 = parseFloat(document.getElementById('first Paralellogramm pair angles').value) * (Math.PI / 180); // Угол в радианах
            alert(ParallelogramArea(parallelogramSide1, parallelogramSide2, angle1));
            break;
        
        case "trapezoid":
            // Преобразование значений в числа
            const trapezoidSide1 = parseFloat(document.getElementById('trapezoid side1').value);
            const trapezoidSide2 = parseFloat(document.getElementById('trapezoid side2').value);
            const trapezoidSide4 = parseFloat(document.getElementById('trapezoid side4').value);
            alert(TrapezoidArea(trapezoidSide1, trapezoidSide2, trapezoidSide4));
		// работать не будет т.к. надо привязать вводимые углы
            break;
    }
}
