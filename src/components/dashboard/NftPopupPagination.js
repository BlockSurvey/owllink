// import { Pagination } from "react-bootstrap";

export default function NftPopupPagination(props) {
  const { pages, getNftsImageObjFromGaia } = props;
  const activePage = props.nftsPaginationActivePage;

  // Variables
  let items = [];

  /**
   * Pagination items
   *
   * @returns
   */
  function getPaginationItem() {
    if (pages && pages > 0) {
      for (let number = 1; number <= pages; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === activePage}
            onClick={() => {
              getNftsImageObjFromGaia(number);
            }}
          >
            {number}
          </Pagination.Item>
        );
      }
    }

    return items;
  }

  return <Pagination>{getPaginationItem()}</Pagination>;
}
