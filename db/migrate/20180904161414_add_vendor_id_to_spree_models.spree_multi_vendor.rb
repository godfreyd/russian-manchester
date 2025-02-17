# This migration comes from spree_multi_vendor (originally 20180904134910)
class AddVendorIdToSpreeModels < SpreeExtension::Migration[5.2]
  def change
    table_names = %w[
      option_types
      properties
      products
      stock_locations
      shipping_methods
      variants
    ]

    table_names.each do |table_name|
      add_reference "spree_#{table_name}", :vendor, index: true
    end
  end
end
