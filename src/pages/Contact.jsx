export default function Contact() {
  return (
    <div className="container-fluid text-center py-5">
      <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Correo
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Descripción
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div>
        <button className="btn btn-danger">Enviar</button>
      </div>
    </div>
  );
}
