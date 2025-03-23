import Link from 'next/link';

const PurchaseButton = () => {
  return (
    <div className="ekit-wid-con">
      <div className="ekit-btn-wraper">
        <a
          href="https://1.envato.market/infine-wp"
          target="_blank"
          rel="noopener noreferrer"
          className="ekit_creative_button ekit_position_aware"
        >
          <span className="ekit_creative_button_text">Purchase Now</span>
          <span
            className="ekit_position_aware_bg"
            style={{ top: '-5.10938px', left: '165.922px' }}
          ></span>
        </a>
      </div>

      {/* नया बटन */}
      {/* <div className="ekit-btn-wraper mt-4">
        <Link href="https://1.envato.market/infine-wp" target="_blank" className="ekit_creative_button ekit_position_aware">
          <span className="ekit_creative_button_text">Buy Now</span>
          <span className="ekit_position_aware_bg" style={{ top: '-5px', left: '165px' }}></span>
        </Link>
      </div> */}
    </div>
  );
};

export default PurchaseButton;
