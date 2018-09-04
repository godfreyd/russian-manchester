# This migration comes from spree_multi_vendor (originally 20180904135029)
class AddDeletedAtToSpreeVendors < SpreeExtension::Migration[5.2]
  def change
    add_column :spree_vendors, :deleted_at, :datetime
    add_index :spree_vendors, :deleted_at
  end
end
