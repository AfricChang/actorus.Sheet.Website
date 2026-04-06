---
title: "Formula Support"
description: "The complete list of supported formula functions."
summary: "AcTorus.Sheet documents 298 public function names covering the most common and highest-value formula families for server-side workbook automation."
category: formulas
order: 30
---

## How to judge formula fit

If formula support matters for your adoption decision, compare your required functions against the actual names listed below — do not rely on broad statements like "supports major formula families."

## Supported scenarios

- cross-worksheet formulas
- defined-name (named-range) formulas
- workbook recalculation after data refresh
- report and template workbook calculations

## Outside current scope

- 3D references
- external workbook references
- goal seek / what-if tables

---

## Aggregate / Count

`SUM`, `COUNT`, `COUNTA`, `AVERAGE`, `MIN`, `MAX`, `COUNTBLANK`, `COUNTIF`, `SUMIF`, `AVERAGEIF`, `COUNTIFS`, `SUMIFS`, `AVERAGEIFS`

## Statistics

`MEDIAN`, `MODE`, `MODE.SNGL`, `STDEV`, `STDEV.S`, `STDEV.P`, `STDEVP`, `VAR`, `VAR.S`, `VAR.P`, `VARP`, `LARGE`, `SMALL`, `PERCENTILE`, `PERCENTILE.INC`, `PERCENTILE.EXC`, `PERCENTRANK`, `PERCENTRANK.INC`, `PERCENTRANK.EXC`, `QUARTILE`, `QUARTILE.INC`, `QUARTILE.EXC`, `RANK`, `RANK.EQ`, `RANK.AVG`, `AVERAGEA`, `MAXA`, `MINA`, `STDEVA`, `STDEVPA`, `VARA`, `VARPA`, `GEOMEAN`, `HARMEAN`, `STANDARDIZE`, `NORMSDIST`, `NORM.S.DIST`, `NORMSINV`, `NORM.S.INV`, `NORMDIST`, `NORM.DIST`, `NORMINV`, `NORM.INV`, `LOGNORMDIST`, `LOGNORM.DIST`, `LOGINV`, `LOGNORM.INV`, `WEIBULL`, `WEIBULL.DIST`, `BINOMDIST`, `BINOM.DIST`, `BINOM.DIST.RANGE`, `CRITBINOM`, `BINOM.INV`, `NEGBINOMDIST`, `NEGBINOM.DIST`, `HYPGEOMDIST`, `HYPGEOM.DIST`, `EXPONDIST`, `EXPON.DIST`, `POISSON`, `POISSON.DIST`, `CONFIDENCE`, `CONFIDENCE.NORM`, `FISHER`, `FISHERINV`, `GAUSS`, `PHI`, `ERF`, `ERF.PRECISE`, `ERFC`, `ERFC.PRECISE`, `AVEDEV`, `DEVSQ`, `SKEW`, `SKEW.P`, `KURT`, `TRIMMEAN`, `ZTEST`, `Z.TEST`, `CORREL`, `PEARSON`, `RSQ`, `SLOPE`, `INTERCEPT`, `FORECAST`, `FORECAST.LINEAR`, `STEYX`, `COVAR`, `COVARIANCE.P`, `COVARIANCE.S`, `SUMX2MY2`, `SUMX2PY2`, `SUMXMY2`

## Math

`ABS`, `ROUND`, `ROUNDUP`, `ROUNDDOWN`, `INT`, `CEILING`, `FLOOR`, `TRUNC`, `SIGN`, `EXP`, `LN`, `LOG`, `LOG10`, `PRODUCT`, `SUMSQ`, `FACT`, `FACTDOUBLE`, `COMBIN`, `COMBINA`, `PERMUT`, `PERMUTATIONA`, `MULTINOMIAL`, `GCD`, `LCM`, `PI`, `RADIANS`, `DEGREES`, `SQRTPI`, `SIN`, `COS`, `TAN`, `COT`, `SEC`, `CSC`, `ASIN`, `ACOS`, `ATAN`, `ATAN2`, `SINH`, `COSH`, `TANH`, `COTH`, `SECH`, `CSCH`, `ASINH`, `ACOSH`, `ATANH`, `MOD`, `POWER`, `SQRT`, `QUOTIENT`, `MROUND`, `EVEN`, `ODD`

## Logical / Error / Information

`IF`, `IFERROR`, `IFNA`, `AND`, `OR`, `NOT`, `TRUE`, `FALSE`, `ISBLANK`, `ISNUMBER`, `ISTEXT`, `ISNONTEXT`, `ISLOGICAL`, `ISERROR`, `ISERR`, `ISNA`, `ISEVEN`, `ISODD`, `ERROR.TYPE`, `TYPE`, `ISREF`, `N`, `NA`

## Text / Value

`LEN`, `CONCAT`, `CONCATENATE`, `TEXTJOIN`, `LEFT`, `RIGHT`, `UPPER`, `LOWER`, `TRIM`, `MID`, `EXACT`, `FIND`, `SEARCH`, `REPLACE`, `SUBSTITUTE`, `REPT`, `PROPER`, `CHAR`, `CODE`, `CLEAN`, `T`, `VALUE`, `TEXT`

## Date / Time

`DATE`, `TIME`, `YEAR`, `MONTH`, `DAY`, `HOUR`, `MINUTE`, `SECOND`, `DATEVALUE`, `TIMEVALUE`, `DAYS`, `DAYS360`, `TODAY`, `NOW`, `EDATE`, `EOMONTH`, `WEEKDAY`, `WEEKNUM`, `ISOWEEKNUM`, `WORKDAY`, `NETWORKDAYS`

## Lookup / Reference

`INDEX`, `MATCH`, `VLOOKUP`, `HLOOKUP`, `XLOOKUP`, `XMATCH`, `OFFSET`, `INDIRECT`

## Array / Shape

`FILTER`, `SORT`, `UNIQUE`, `TRANSPOSE`, `ROWS`, `COLUMNS`, `CHOOSE`, `SUMPRODUCT`

## Financial

`FV`, `FVSCHEDULE`, `PV`, `PMT`, `NPER`, `RATE`, `EFFECT`, `NOMINAL`, `RRI`, `PDURATION`, `IPMT`, `ISPMT`, `PPMT`, `CUMIPMT`, `CUMPRINC`, `NPV`, `IRR`, `MIRR`, `XNPV`, `XIRR`, `DISC`, `INTRATE`, `RECEIVED`, `PRICEDISC`, `YIELDDISC`, `TBILLPRICE`, `TBILLYIELD`, `ACCRINTM`, `PRICEMAT`, `YIELDMAT`, `DOLLARDE`, `DOLLARFR`, `COUPPCD`, `COUPNCD`, `COUPNUM`, `COUPDAYBS`, `COUPDAYS`, `COUPDAYSNC`, `PRICE`, `YIELD`, `DURATION`, `MDURATION`, `ODDFPRICE`, `ODDFYIELD`, `ODDLPRICE`, `ODDLYIELD`, `SLN`, `SYD`, `DB`, `DDB`, `VDB`

---

See also: [Limitations](limitations) for what falls outside the current formula scope.
