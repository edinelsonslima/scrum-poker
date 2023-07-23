export interface IUser {
  id: string;
  name: string;
  point: number | null;
}

export interface IRoom {
  id: string;
  showPoints: boolean;
  users?: IUser[];
}
