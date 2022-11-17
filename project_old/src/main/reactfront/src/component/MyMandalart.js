function MyMandalart() {
  return(
    <div>
      <section>누구누구님의 만다라트</section>
      <section>
        <div className="mandalart-table">
          <div className="main-item m1">
            <DetailItem/>
          </div>
          <div className="main-item m2">
            <DetailItem/>
          </div>
          <div className="main-item m3">
           <DetailItem/>
          </div>
          <div className="main-item m4">
           <DetailItem/>
          </div>
          <div className="main-item m5">
            <DetailItem/>
          </div>
          <div className="main-item m6">
            <DetailItem/>
          </div>
          <div className="main-item m7">
            <DetailItem/>
          </div>
          <div className="main-item m8">
          <DetailItem/>
          </div>
          <div className="main-item m9">
            <DetailItem/>
          </div>
        </div>
      </section>
      <section>section2</section>
    </div>
  )
}

function DetailItem() {
  return (
    <>
      <textarea className="detail-item d1"></textarea>
      <textarea className="detail-item d2"></textarea>
      <textarea className="detail-item d3"></textarea>
      <textarea className="detail-item d4"></textarea>
      <textarea className="detail-item d5"></textarea>
      <textarea className="detail-item d6"></textarea>
      <textarea className="detail-item d7"></textarea>
      <textarea className="detail-item d8"></textarea>
      <textarea className="detail-item d9"></textarea>
    </>
  )
}


export default MyMandalart;