json.extract!(@notebook, :id, :title, :ord, :user_id)
json.notes do
  json.array!(@notebook.notes) do |note|
    json.extract!(note, :id, :title, :ord, :notebook_id)
  end
end
