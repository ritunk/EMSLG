export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
  },

  {
    name: "Department Name",
    selector: (row) => row.dep_name,
  },

  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const DepartmentButtons = () => {
  return (
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};
