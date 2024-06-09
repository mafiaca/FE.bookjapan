
function ListBookComponent ({bookList}){
      return ( 
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên book</th>
              <th scope="col">Tác giả</th>
            </tr>
          </thead>
            <tbody>
              {bookList.map((book,index)=>
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td className="text-start">{book.name}</td>
                    <td className="text-start">{book.author}</td>
                  </tr>
              )}
          </tbody>
        </table>
        )
}

export default ListBookComponent
