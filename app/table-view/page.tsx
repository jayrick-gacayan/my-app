import Table, { ColumnDef, HeaderDef } from "../sections/table";
import Image from "next/image";
export interface Sample {
  id: number;
  name: string;
  description: string;
  imageURL: string;
}

const data: Sample[] = [
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

const headers: HeaderDef<Sample>[] = [
  {
    key: 'id',
    title: 'ID',
    sortable: true,
  },
  {
    key: 'name',
    title: 'Name',
    sortable: true,
  },
  {
    key: 'description',
    title: 'Description',
    sortable: true,
  },
  {
    key: 'action',
    title: 'Actions',
  }
]

const columns: ColumnDef<Sample>[] = [
  {
    key: 'id',
    title: 'ID',
    sortable: true,
  },
  {
    key: 'name',
    title: 'Name',
    sortable: true,
  },
  {
    key: 'description',
    title: 'Description',
    sortable: true,
  },
  {
    key: 'imageURL',
    title: 'Photo',
    renderCell: (item, column) => {
      return <Image src={item.imageURL} width={50} height={50} alt={`${item.id}-${item.name}`} />
    },
  },
  {
    key: 'action',
    title: 'Actions',
    renderCell: (item) => {
      return (
        <div>
          This is the action container.
        </div>
      )
    }
  },

]

export default function Page() {
  return (
    <Table headers={headers} columns={columns} data={data} />
  )
}