//#region AreaCalculating

// Площадь окружности(квадрат радиуса на Пи)
function CircleArea ( radius )  { return Math.PI * (radius ^2); }
// Площадь квадрата(длина на высоту)
function SquareArea ( length, height )  { return length * height; }
// Площадь трапеции(сумма основания левого треугольника и его стороны умноженная на высоту, делёную на 2)
function TrapezoidArea ( side1, side2, side4)  { return (  (side1 + (side4 - side2)) *
                                                           (Math.sqrt(side1 ^ 2 + (side4 - side2) ^ 2))  )
                                                            / 2; }
// Площадь паралеллограмма( Сторона умноженная на синус угла и на основание)
function ParallelogramArea (side1, side4, angle1)  { return side1 * side4 * Math.sin(angle1); }

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



// Выбор элемента списка
function ChooseListElement(value){
        document.getElementById('circleForm').style.display = 'none';
        document.getElementById('squareForm').style.display = 'none';
        document.getElementById('triangleForm').style.display = 'none';
        document.getElementById('trapezoidForm').style.display = 'none';
        document.getElementById('paralellogrammForm').style.display = 'none';

    switch(value){
        case "circle":

            console.log("User choose circle");

            break;
        case "square":
            document.getElementById('squareForm').style.display = 'block';
            console.log("User choose square");
            break;
        case "triangle":


            console.log("User choose triangle");
            break;
        case "paralellogramm":


            console.log("User choose paralellogramm");
            break;
        case "trapezoid":


            console.log("User choose trapezoid");
            break;
            
    }
}