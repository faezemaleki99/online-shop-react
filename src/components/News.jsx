
export default function News() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="text-center">
                    <h4 className="fw-bold mb-2"> Our Newsletter </h4>
                    <p className="text-muted mb-4">
                        Subscribe to our Newsletter to receive early
                        discount offers
                    </p>
                    <div className="d-flex mx-auto gap-3" style={{ maxWidth: "600px" }} >
                        <input type="email" className="form-control rounded-end-0" placeholder="Enter your email" />
                        <button className="btn text-white" style={{ backgroundColor: "#635bff", whiteSpace: "nowrap", borderRadius: "10px", padding: "10px" }} >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}