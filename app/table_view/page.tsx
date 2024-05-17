import Table, { ColumnDef } from "../sections/table";
import Image from "next/image";

export interface Sample { 
  id: number;
  name: string;
  description: string;
  imageURL: string;
}

export default function Page() { 
  let data: Sample[] = [
    {
      id: 1,
      name: 'sample',
      imageURL: 'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'sample',
    },
    {
      id: 2,
      name: 'sample',
      description: 'sample',
      imageURL: 'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'sample',
      description: 'sample',
      imageURL: 'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]

  let columns: ColumnDef<Sample>[] = [
    {
      key: 'id',
      title: 'ID',
    },
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'description',
      title: 'Description',
    },
    {
      key: 'imageURL',
      title: 'Photo',
      render(column, item) {
        return <Image src={item.imageURL} width={50} height={50} alt={`${item.id}-${item.name}`} />
      },
      
    }
  ]

  return (
    <Table data={data} columns={columns} />
  )
}