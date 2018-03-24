InfPrec atan(const InfPrec& x)
{
    InfPrec Result = x;
    InfPrec XSquared = x * x;
    
    InfPrec Term = x;
    int Divisor = 1;
    while (Term != 0)
    {
        Divisor += 2;
        Term *= XSquared;
        Result -= Term / Divisor;

        Divisor += 2;
        Term *= XSquared;
        Result += Term / Divisor;
    }
    return Result;
}