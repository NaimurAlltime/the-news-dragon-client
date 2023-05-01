import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermAndCondition = () => {
  return (
    <div>
      <Container>
        <h2>Accept terms and conditions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          consequuntur sint nisi error praesentium hic culpa voluptates ipsam
          saepe, voluptatum, maxime odit sed. Perspiciatis nobis repellendus
          voluptate praesentium modi consequuntur ullam eos iste laborum. Minus
          nihil esse dicta necessitatibus ab asperiores deserunt illum sed alias
          excepturi error eveniet praesentium consectetur, ratione eligendi.
          Porro, maxime. Officiis corrupti, accusantium perspiciatis quod omnis
          atque aperiam! Exercitationem explicabo, quasi impedit accusantium
          facere corrupti incidunt voluptatum quas quibusdam placeat provident
          unde. Voluptates amet eos maxime, reprehenderit voluptatum ducimus
          quasi expedita deserunt aliquam facere debitis consequatur, omnis,
          aperiam suscipit obcaecati cum! Magnam unde ab sint impedit.
        </p>
        <p>
          Go Back <Link to="/register">Register</Link>
        </p>
      </Container>
    </div>
  );
};

export default TermAndCondition;
