export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cell_With_Img">
          <img
            src={params.row.img}
            alt={params.row.username}
            className="cell_Img"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cell_With_Status ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Jon Snow",
    img: "https://i.pinimg.com/236x/e3/98/57/e39857c9cff6a34811b4a467334c008d.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://i.pinimg.com/236x/e6/9e/c0/e69ec0b958f9c2d812f9b02d5a9de27c.jpg",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Cersei Lannister",
    img: "https://i.pinimg.com/236x/3e/f6/ab/3ef6abd5d625f4d14900ad377df29d17.jpg",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Arya Stark",
    img: "https://i.pinimg.com/236x/ec/e5/a6/ece5a606b4c52dd53af3cfbf9e6ef30a.jpg",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Daenerys Targaryen",
    img: "https://i.pinimg.com/236x/8c/b4/59/8cb459dcd8218ceb289b7b1de6d04c45.jpg",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://i.pinimg.com/236x/0e/a1/c9/0ea1c9ed13ba6ceb7a18469ab3965770.jpg",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Ferrara Clifford",
    img: "https://i.pinimg.com/236x/dc/20/b5/dc20b5f510d00d8785f9a96fa44aae9e.jpg",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Teryoun Lannister",
    img: "https://i.pinimg.com/236x/5f/51/37/5f5137d762bcbfdf31c6842c73f99603.jpg",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Sansa Stark",
    img: "https://i.pinimg.com/236x/fd/86/4e/fd864eced6c0d8e209265836705d0463.jpg",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Ned Stark",
    img: "https://i.pinimg.com/236x/86/6a/c1/866ac11ed2462eab8c1c6e0c5f4f44bd.jpg",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
