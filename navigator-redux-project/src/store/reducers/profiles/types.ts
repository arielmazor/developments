export enum eActionsTypes{
  NEW_PROFILE = "1",
};

export interface IActionProfile {
  type:  string,
  obj: IProfile
};


export interface  IProfile{
  id: number,
  name: string,
}