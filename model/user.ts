export interface IUser {
  _id: {
    $oid: string;
  }
  name: string;
  email: string;
  create_at: string;
  update_at: Date;
}