json.extract!(@notebook, :id, :title, :ord, :user_id)
json.notes do
  json.array!(@notebook.notes) do |note|
  end
end
