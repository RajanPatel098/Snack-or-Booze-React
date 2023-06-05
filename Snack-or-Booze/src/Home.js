import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
        <h2 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h2>
            <p className="font-weight-bold">
              We have {snacks.length} snacks.
            </p>
            <p className="font-weight-bold">
             We have {drinks.length} drinks.
            </p>
          <CardTitle>

          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;