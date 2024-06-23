function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th scope='col'>{props.colHeadA}</th>
          <th scope='col'>{props.colHeadB}</th>
          <th scope='col'>{props.colHeadC}</th>
        </tr>
      </thead>
      <tbody>
        {props.filteredSearch.map((book) => {
          return (
            <tr key={book.id}>
              <td scope='col'>{book.id}</td>
              <td scope='col'>{book.title}</td>
              <td scope='col'>{book.author}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
