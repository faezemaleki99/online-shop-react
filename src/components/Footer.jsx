
export default function Footer() {
    return (
        <footer className="py-4 bg-dark">
            <div className="container">
                <div className="row align-items-center text-center text-md-start">
                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                        <p className="text-white mb-0 small">Copyright © 2026 OnlineShop by Faeze Maleki </p>
                    </div>
                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src="/src/assets/logo2.png" style={{ width: "40px", height: "40px", objectFit: "contain", marginRight: "10px" }} />
                            <span className="text-white fw-bold fs-5"> OnlineShop</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-2">
                            <img src="/src/assets/card-1.png" className="payment-card" />
                            <img src="/src/assets/card-2.png" className="payment-card" />
                            <img src="/src/assets/card-3.png" className="payment-card" />
                            <img src="/src/assets/card-4.png" className="payment-card" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}