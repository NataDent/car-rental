import { Box } from '@chakra-ui/react';
import { CatalogList } from 'components/CatalogList';
import Filter from 'components/Filter';

const Catalog = () => {
  return (
    <Box>
      <Filter />
      <CatalogList />
    </Box>
  );
};

export default Catalog;