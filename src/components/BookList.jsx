import React from "react";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Row className="row g-4" xs={1} md={4}>
          {this.props.books.map((book) => (
            <SingleBook book={book}></SingleBook>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
