## Java Object Oriented Programme 
---
private的fields的值，只能被同一个class里面的constructor和method访问

---
### Overloading 重载
- 是静态static 的多态
- method有同样的名字，但是有不一样的参数
- ---
### Instance Fields vs Static Fields
- Instance Fields
```Java
private double creditCardBalance
```

- Static Fields

```Java
private static int customerNumber= 1000;
```

static fields是使用了static关键字的，并且他们只属于自己的class，需要将static fields想象成global variable

---
### 静态方法
```Java
public static void main(String[] args){...}
public static int max(int a, int b){...}
```

静态方法属于class（不属于某个对象），只能通过类名（Class Name）调用

```Java
Math.max(3,5);
```
instance fields -> 属于对象，对于对象名调用
static fields —> 属于类，只能类名调用

---
### Encapsulation 封装
public variable 违反了封装，因为允许修改
private，public，protected，no modifier

---
### ArrayList

```Java
ArrayList<BankAccount> accounts=new ArrayList<BankAccount>();
account.add(new account());
account.set(new account());
account.remove(new account());
isEmpty();
myArrayList.size();
ArrayList<Type> myArrayList=new ArrayList<Type>();
```
---

### Handle Exception
```Java
try{
}catch(Exception e){
}
```
---
### File IO
```Java
PrintWriter out=new PrintWriter(fw)
```
---
### 继承
- Person Class: superclass | baseclass
- Student Class: derived class | subclass
- 他们有is-a关系
- 使用关键字 extends
- 一个子class只能继承一个父类，子class的constructor里面需要写superclass的constructor
```Java
super(a,b,c)
```

---
### Overriding 重写
子类定义了一个不大一样的执行方法，这个方法和父类有同样的名字，参数和返回类型，但是执行内容不一样。从subclass type里面调用，就会被执行。

在subclass里调用baseclass里的方法，就在调用前加一个super，例如：
```JAVA
super.writeCheque(amount);
```
---
### Polymorphism
- 多态允许你在subclass里面修改，子类可以重写父类的方法methods，这个是和同一个baseclass里面同样的方法名执行的
- the ability to refer to objects of multiple types with varying behaviour
---
### Abstract 抽象方法和类
- abstract class 里面有head 和signature
- 抽象方法和class要被extend
```JAVA
public abstract class Car{
  //abstract class里面没有方法体，也没有花括号。
  public abstract void drive(double time);
}
```
---
### Final class和 method
final关键词防止其它程序员extend这个方法或重写它
```Java
public final boolean checkPassword(String password){

}
```
---
### Interface 接口
- 没有构造函数，可以用来声明参考变量，没有instance fields，但可以有static fields，接口没有任何实施内容，只有list of method signatures(name,parameters,and return type)
```java
public class classNmae implements Interface1, Interface2{
  //methods need to be declared at public
}
```
