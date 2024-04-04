import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ArtCenterCard from '../../components/ArtCenterCard';
import { Skeleton } from '@/components/ui/skeleton'; // Skeleton eklediğimizi varsayalım
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"; // Pagination bileşenlerini ekliyoruz
import StickyNavigationMenu from '@/components/StickyNavigationMenu';

const ArtCentersPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const [artCenters, setArtCenters] = useState([]);
  const [loading, setLoading] = useState(true); // Yükleme durumunu izlemek için bir state ekliyoruz
  const pageNumber = parseInt(page) || 1;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Veri yüklenmeye başladığında loading state'ini true yap
      const response = await fetch(`/api/artCenters?page=${pageNumber}`);
      const data = await response.json();
      setArtCenters(data.artCenters);
      setLoading(false); // Veri yükleme tamamlandığında loading state'ini false yap
    };
    fetchData();
  }, [pageNumber]);

  // Skeleton sayısı
  const skeletonCount = 8;

  return (
    <div className="container">
      <StickyNavigationMenu />
      {(artCenters.length === 0 || loading) && (
        <div className="skeleton-container">
          {/* 8 adet skeleton ekliyoruz */}
          {Array.from({ length: skeletonCount }, (_, index) => (
            <Skeleton key={index} className="w-full h-[150px] rounded-md  mb-2" />
          ))}
        </div>
      )}

      {/* ArtCenterCard'ları göster */}
      {!loading && artCenters.map((center, index) => (
        <ArtCenterCard key={index} center={center} />
      ))}

      {/* Pagination links */}
      <Pagination className='mt-5'>
        <PaginationContent>
          <PaginationItem>
            {/* Previous link */}
            {pageNumber > 1 && (
              <PaginationPrevious href={`/artCenters/${pageNumber - 1}`} />
            )}
          </PaginationItem>
          {/* Page links */}
          <PaginationItem>
            <PaginationLink href="#">{pageNumber}</PaginationLink>
          </PaginationItem>
          {/* Next link */}
          <PaginationItem>
            {pageNumber < 7 && (
              <PaginationNext href={`/artCenters/${pageNumber + 1}`} />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ArtCentersPage;
