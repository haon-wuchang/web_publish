

class Employee {
    #empno;
    constructor(empno,ename,dept){
        this.#empno=empno;
        this.ename=ename;
        this.dept=dept;
    }

    setEmpno = (empno) => this.#empno=empno; 
    setEname = (ename) => this.ename=ename; 
    setDept = (dept) => this.dept=dept; 

    getEmpno =() => this.#empno;
    getEname =() => this.ename;
    getDept =() => this.dept;


    info = () => console.log(`${this.ename},${this.dept}`);
    infoAll = () => console.log(`${this.#empno},${this.ename},${this.dept}`);

}

const ms = new Employee('1233','멋사','개발1팀');
ms.info();
ms.infoAll();
ms.setEmpno('5678')
ms.setDept('컨텐츠제작팀');
ms.infoAll();
console.log(ms.getEmpno());
console.log(ms.getEname());
console.log(ms.getDept());

//빡빢하게 안외워도댕 함수나 잘외워라