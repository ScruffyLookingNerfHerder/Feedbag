import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Grocerytron from "../../components/Grocerytron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    Grocery: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log(this.props)
    API.getGrocery(this.props.user.id, this.props.match.params.id)
      .then(res => {
        this.setState({ Grocery: res.data })
      console.log(res.data)
    })
      .catch(err => console.log(err));
  }

  render() {
    const user = this.props.user.id
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Grocerytron>
              <h1>
                {this.state.Grocery.title} by {this.state.Grocery.author}
              </h1>
            </Grocerytron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.Grocery.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/groceries/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
