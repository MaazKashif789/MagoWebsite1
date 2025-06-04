import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, ArrowLeft } from 'lucide-react';
import truckbg from '../assets/truckbg.jpg';

// Import all category images
import polymers from '../assets/Products/polymers.webp';
import engineeringPlastics from '../assets/Products/engineering_plastics.webp';
import rubber from '../assets/Products/rubber.webp';
import pu from '../assets/Products/PU.webp';
import plasticizers from '../assets/Products/Plasticizers.webp';
import blowingAgent from '../assets/Products/blowing_agent.webp';
import additive from '../assets/Products/additive.webp';
import fillers from '../assets/Products/Fillers.webp';
import pigments from '../assets/Products/pigments.webp';
import solvents from '../assets/Products/solvents.webp';
import speciality from '../assets/Products/speciality.webp';
import oxides from '../assets/Products/oxides.webp';

interface Category {
  Category: string;
  Image_Path: string;
}

interface Product {
  id: string;
  Product: string;
  hsCode: string;
  Applications: string;
  'Common Grades': string;
  category: string;
}

// Map of category names to their imported images
const categoryImages: { [key: string]: string } = {
  'General Plastics (Polymers)': polymers,
  'Engineering Plastics': engineeringPlastics,
  'Rubbers & Elastomers': rubber,
  'PU & PU Raw Materials': pu,
  'Plasticizers': plasticizers,
  'Blowing Agents & Crosslinkers': blowingAgent,
  'Stabilizers, Additives & Processing Aids': additive,
  'Fillers & Reinforcements': fillers,
  'Pigments & Colorants': pigments,
  'Solvents': solvents,
  'Specialty Chemicals': speciality,
  'Anhydrides & Oxides': oxides
};

const ProductsPage = () => {
  const base = import.meta.env.BASE_URL || '/';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [heroImage, setHeroImage] = useState(truckbg); // Default hero image

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Fetch categories with base URL prefix
    fetch(`${base}categories.json`)
      .then(response => response.json())
      .then(data => {
        const updatedCategories = data.map((category: Category) => ({
          ...category,
          Image_Path: categoryImages[category.Category] || speciality
        }));
        setCategories(updatedCategories);
      })
      .catch(error => {
        console.error('Error loading categories:', error);
      });

    // Fetch products with base URL prefix
    fetch(`${base}product_file.json`)
      .then(response => response.json())
      .then(data => {
        const transformedProducts = data.map((item: any, index: number) => ({
          id: String(index + 1),
          Product: item.Product,
          hsCode: item.HS_Code || 'N/A',
          Applications: item.Applications,
          'Common Grades': item['Common Grades'],
          category: item.Category || 'Uncategorized'
        }));
        setProducts(transformedProducts);
      })
      .catch(error => {
        console.error('Error loading products:', error);
      });
  }, [base]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.Product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.hsCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.Applications.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    const categoryImage = categoryImages[category] || speciality;
    setHeroImage(categoryImage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSearchQuery('');
    setHeroImage(truckbg);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--color-background-light)]">
      {/* <Navbar /> */}
      <main className="pt-20 pb-10">
        <div className="relative py-16 mb-12">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={selectedCategory || "Chemical Products"}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                {selectedCategory ? selectedCategory : 'Our Products'}
              </h1>
              <p className="text-lg md:text-xl text-white/90 drop-shadow mb-8">
                {selectedCategory 
                  ? 'Browse our products in this category'
                  : 'Explore our comprehensive range of chemical products by category'}
              </p>
              {selectedCategory && (
                <button
                  onClick={handleBackToCategories}
                  className="flex items-center gap-2 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-secondary)] transition-colors mx-auto"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Categories
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {selectedCategory ? (
            <>
              <div className="mb-8 max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search products by name, HS code, or description..."
                    className="pl-10 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[var(--color-text-dark)]">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} in {selectedCategory}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                        {product.Product}
                      </CardTitle>
                      <p className="text-sm text-[var(--color-text-gray)]">
                        HS Code: {product.hsCode}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[var(--color-text-dark)] mb-4 line-clamp-3">
                        {product.Applications}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-[var(--color-text-gray)]">Available Grades:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product['Common Grades'].split(',').map(grade => (
                            <span
                              key={grade.trim()}
                              className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm"
                            >
                              {grade.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16 bg-white rounded-lg shadow-md">
                  <p className="text-[var(--color-text-dark)] text-lg mb-4">
                    No products found matching your search criteria.
                  </p>
                  <p className="text-[var(--color-text-gray)]">
                    Try adjusting your search to find what you're looking for.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map(category => (
                <Card
                  key={category.Category}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden cursor-pointer"
                  onClick={() => handleCategoryClick(category.Category)}
                >
                  <div className="relative h-48 w-full">
                    <img
                      src={category.Image_Path}
                      alt={category.Category}
                      className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pt-4 pb-6">
                    <CardTitle className="text-xl text-center text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                      {category.Category}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
