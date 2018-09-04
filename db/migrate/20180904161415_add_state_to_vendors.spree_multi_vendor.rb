# This migration comes from spree_multi_vendor (originally 20180904134950)
class AddStateToVendors < SpreeExtension::Migration[5.2]
  def change
    add_column :spree_vendors, :state, :string
    add_index :spree_vendors, :state
  end
end
