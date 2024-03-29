export default interface DivProps {
  text: string;
  style: object;
  name: string;
  childrenDivs: DivProps[];
  findParent?: (name:string) => void;
  addDiv?: (name:string) => void
  editDiv?: (name:string, param:string, value:any) => void
}
